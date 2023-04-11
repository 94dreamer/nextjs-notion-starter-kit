import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 站点的根 Notion 页面（必填）
  rootNotionPageId: '8d8af4e1c6d045d4998db1087e072572',

  // 如果您想将页面限制在单个 notion 工作区（可选）
  // （这应该是一个 Notion ID；请参阅文档了解如何提取此 ID）
  rootNotionSpaceId: null,

  // 基本站点信息（必填）
  name: '94梦想家',
  domain: '94dreamer.com',
  author: '94dreamer',

  // open graph metadata (optional)
  // 开放图谱元数据（可选）
  
  description: '94dreamer的个人博客',

  // 社交用户名（可选）

  // twitter: 'transitive_bs',
  github: '94dreamer',
  zhihu: '94dreamer',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`


  // 默认的 notion 图标和封面图片，用于整个站点的一致性（可选）
  // 页面特定的值将覆盖这些整个站点的默认值
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // 是否启用 LQIP 预览图像支持（可选）
  isPreviewImageSupportEnabled: true,

  // 是否启用 Redis 以缓存生成的预览图像（可选）
  // 注意：如果启用了 Redis，您需要设置 REDIS_HOST 和 REDIS_PASSWORD
  // 环境变量。有关更多信息，请参阅自述文件
  isRedisEnabled: false,


  // notion 页面 ID 到 URL 路径的映射（可选）
  // 此处定义的任何页面将覆盖其默认 URL 路径
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // 是否使用默认的 notion 导航样式或具有重要页面链接的自定义样式
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '关于我',
      pageId: 'f6cba349c03444c38b703e94fc3c4659'
    },
    {
      title: '联系方式',
      pageId: '89b8d81576f84c9597b6d0a4471a560b'
    }
  ]
})
