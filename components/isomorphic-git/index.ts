//yarn add isomorphic-git
import * as command from 'isomorphic-git'
import http from 'isomorphic-git/http/web'
//yarn add @isomorphic-git/lightning-fs
import LightningFS from '@isomorphic-git/lightning-fs';

interface GitControls {
    pfs?: any;
    command?: any;
    addnewfile: (filename: string, content: string) => void
}

async function InitIsomorphicGit(): Promise<GitControls> {
    await indexedDB.deleteDatabase('fs');
    const fs = new LightningFS('fs')
    const pfs = fs.promises
    const dir: string = '/git'
    try {
        await pfs.mkdir(dir)
    } catch (e) {
        console.error(`fs.mkdir(${dir}) failed.`)
    }
    // Behold - it is empty!
    const folderContent = await pfs.readdir(dir);
    console.log(folderContent)

    await command.clone({
        fs,
        http,
        dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://github.com/tsengyushiang/DB.git',
        ref: 'main',
        singleBranch: true,
        onProgress: (progress) => {
            console.log(progress)
        },
        depth: 1
    });

    // Now it should not be empty...
    const gitContent = await pfs.readdir(dir);
    console.log(gitContent)
    const addnewfile = async (filename: string, content: string) => {
        await pfs.writeFile(`${dir}/${filename}`, content, 'utf8')
        await command.add({ fs, dir, filepath: filename })
        await command.commit({
            fs,
            dir,
            message: 'add new file',
            author: {
                name: 'Mr. Test',
                email: 'mrtest@example.com'
            }
        })
        let commits = await command.log({ fs, dir, depth: 1 })
        console.log(commits[0])
        let pushResult = await command.push({
            fs,
            http,
            dir,
            corsProxy: 'https://cors.isomorphic-git.org',
            remote: 'origin',
            ref: 'main',
            onAuth: url => {
                const auth = {
                    username: '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',
                }
                return auth
            },
        })
        console.log(pushResult)
    }
    return {
        pfs,
        command,
        addnewfile
    }
}

export type { GitControls }
export { InitIsomorphicGit };