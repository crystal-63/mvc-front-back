# MVC是什么
  1. 它是一种设计思想或方案
  2. M -> Model -> 模型层 -> 数据模型 -> 数据库 
  3. V -> View  -> 视图层 -> 模板引擎 EJS/PUG -> HTML字符串
  4. C -> Controller -> 控制器层 -> 给视图层提供数据 / 调用模型层方法 / 提供  据API  

  - 后端一种设计方式
  - 以前WEB的实现方案 -> 前后端混编 -> 动态网站 -> 服务端渲染的方式


  浏览器 -> www.baidu.com -> 服务器上 -> 资源 -> HTML -> 控制器 -> 调用模型层的方法 -> 获取数据 -> 控制器 -> 模板引擎 -> 拼接一个完整的HTNL字符串 -> 返回一个完整的HTML文件 -> 客户端做解析渲染

# 前端MVC是什么？
  1. M -> Service -> 服务层 -> 异步请求数据的层 -> 对数据进行操作层
  2. V -> HTML字符串 -> 函数返回HTML字符串
  3. C ->给视图提供数据 / 调用M层的方法对数据进行操作 / 对DOM进行响应的操作

# 后端的实践
  1. 路由： List  Detail
  2. 列表展示 Brand Model
  3. 列表项删除
  4. 增加手机信息
  5. 手机详情页 展示
