async function getDataRepos(param: string) {
    const res = await fetch(`https://api.github.com/users/${param}/repos`)
    await new Promise(r => setTimeout(r, 2000))
    return res.json()
  
  }
  

const RepoList = async ({ slug }: any) => {
    const dataRepos = await getDataRepos(slug)
    return <>
        <p>detail repos : {slug} </p>

        <div>
            {JSON.stringify(dataRepos)}
        </div>
    </>
}

export default RepoList
