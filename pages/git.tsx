import { NextPage } from "next";
import { useState } from "react";
import * as Git from '../components/isomorphic-git'
import { GitControls } from '../components/isomorphic-git'

const IsomorphicGitPage: NextPage = () => {
    const [git, setGit] = useState({} as GitControls)

    async function initGit() {
        setGit(await Git.InitIsomorphicGit());
    }

    async function createNewFile() {
        git.addnewfile(`newfile2.txt`, `hello world add from browser2`)
    }

    return (
        <div>
            <button onClick={initGit}>Init Git</button>
            {git.command != undefined &&
                <button onClick={createNewFile}>Create New File</button>
            }
        </div>
    )
}

export default IsomorphicGitPage