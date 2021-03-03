jsproxy_config （{
  //当前配置的版本（记录在日志中，用于排查问题）
  //每次修改配置，该值需要增加，否则不会生效。
  //默认每隔5分钟自动下载配置，若想立即验证，可通过任意模式访问。
  ver：'107' ，

  //通过CDN加速常用网站的静态资源（实验中）
  static_boost：{
    启用：true ，
    版本：60
  } ，

  //官方配置
  node_map：{
    'demo-hk'：{
      标签：“演示服务-香港例程” ，
      行：{
        //主机：权重
        'node-aliyun-hk-0.etherdream.com:8443' ：1 ，
        'node-aliyun-hk-1.etherdream.com:8443' ：1 ，
        'node-aliyun-hk-2.etherdream.com:8443' ：1 ，
      }
    } ，
    'demo-sg'：{
      标签：“演示服务-新加坡中断” ，
      行：{
        'node-aliyun-sg.etherdream.com:8443' ：1 ，
      } ，
    } ，
    'mysite'：{
      标签：“当前站点” ，
      行：{
        [位置。主持人]：1 ，
      }
    } ，
    //该股东用于加载大体积的静态资源
    'cfworker'：{
      标签：'' ，
      隐藏的：true ，
      行：{
        //收费版（高权重）
        'node-cfworker.etherdream.com'：4 ，

        //免费版（低权重，分摊一些成本）
        //每个账号每天10万次免费请求，但有频率限制
        'b.007.workers.dev'：1 ，
        'b.hehe.workers.dev'：1 ，
        'b.lulu.workers.dev'：1 ，
        'b.jsproxy.workers.dev'：1 ，
      }
    }
  } ，

  / **
   *默认基线
   * /
  // node_default：'mysite'，
  node_default：/ jsproxy-demo \。\ w + $ / 。测试（地点，主持人）？'demo-hk'：'mysite' ，

  / **
   *加速推理
   * /
  node_acc：'cfworker' ，

  / **
   *静态资源CDN地址
   *用于加速`assets`目录中的资源访问
   * /
  asset_cdn：'https : //cdn.jsdelivr.net/gh//whooc/wh123.github.io@master/assets/ ' ，
  //本地测试时打开，否则访问的是线上的
  // asset_cdn：'assets /'，

  //首页路径
  index_path：'index_v3.html' ，

  //支持CORS的站点列表（实验中...）
  direct_host_list：'cors_v1.txt' ，

  / **
   *自定义注入页面的HTML
   * /
  inject_html：'<！-自定义html- >' ，


} ）