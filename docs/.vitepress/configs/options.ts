interface RouterItem {
    name: string;
    path: string;
}

const jsRouter: RouterItem[] = [
    {
        name: 'Vite 配置文件',
        path: 'viteConfig'
    },
    {
        name: '移动端自适应',
        path: 'postcss'
    },
    {
        name: 'DOM 文档',
        path: 'dom'
    },
]

const tsRouter: RouterItem[] = [
    {
        name: '类型挑战',
        path: 'typeChallenges'
    },
]

const javaRouter: RouterItem[] = [
    {
        name: 'first',
        path: 'first'
    },
]

const CommonRouter: RouterItem[] = [
    {
        name: 'Git',
        path: 'git'
    },
    {
        name: '解除占用端口',
        path: 'port'
    },
]

const cosName: RouterItem[] = [
    {
        name: 'site',
        path: 'site-1310654229'
    },
    {
        name: 'aigc',
        path: 'index-1310654229'
    },
]

const routerToPath = (routers: RouterItem[]) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: path
        }
    })
}

const cosNameToPath = (routers: RouterItem[]) => {
    return routers.map(({name, path}) => {
        return {
            text: name,
            link: `https://${path}.cos-website.ap-guangzhou.myqcloud.com`
        }
    })
}

export const cosPath = cosNameToPath(cosName)
export const jsPath = routerToPath(jsRouter)
export const tsPath = routerToPath(tsRouter)
export const javaPath = routerToPath(javaRouter)
export const CommonPath = routerToPath(CommonRouter)