# Cloudflare 部署指南

本项目包含一个完整的 Python 学习平台，分为两部分部署：
1. 后端 API 服务 - 部署到 Cloudflare Workers
2. 前端界面 - 部署到 Cloudflare Pages

## 部署步骤

### 1. 部署后端 API (Cloudflare Workers)

#### 1.1 准备工作
- 注册 Cloudflare 账户
- 安装 Node.js (用于本地开发，可选)

#### 1.2 部署 Workers
1. 登录 Cloudflare Dashboard
2. 进入 "Workers & Pages" → "Workers"
3. 点击 "Create a Worker"
4. 输入 Worker 名称，如 `python-learning-api`
5. 将 `src/index.js` 的内容复制到代码编辑器
6. 点击 "Save and Deploy"
7. 记下生成的 URL，格式为 `https://python-learning-api.your-subdomain.workers.dev`

### 2. 部署前端界面 (Cloudflare Pages)

#### 2.1 配置前端
1. 编辑 `frontend/index.html`
2. 将第 105 行的 `API_BASE_URL` 替换为你在第 1.2 步中记下的 Workers URL
3. 保存文件

#### 2.2 部署到 Pages
1. 登录 Cloudflare Dashboard
2. 进入 "Workers & Pages" → "Pages"
3. 点击 "Create a project"
4. 选择 "Connect to Git" 并连接你的 GitHub 账户
5. 选择包含此项目的仓库
6. 在 "Build configurations" 中：
   - Framework preset: 选择 "None"
   - Build command: 留空
   - Build output directory: `/frontend`
   - Root directory: 留空
7. 点击 "Save and Deploy"

## 项目结构

```
cloudflare/
├── wrangler.toml          # Workers 配置文件
├── src/
│   └── index.js          # Workers 后端代码
├── frontend/
│   └── index.html        # 前端页面
└── README.md             # 本说明文件
```

## 功能特性

- 用户注册/登录
- 20 个 Python 课程，从基础到高级
- 在线代码编辑和执行（模拟）
- 课程进度跟踪

## 注意事项

1. **代码执行限制**：由于 Cloudflare Workers 的安全限制，无法实际执行 Python 代码，当前为模拟执行结果。
2. **数据存储**：当前使用内存存储，重启后数据会丢失。如需持久化数据，可使用 Cloudflare D1 数据库。
3. **CORS**：已配置跨域资源共享，允许前端访问后端 API。

## 自定义部署

如需修改功能，可按以下步骤操作：

1. 修改 `src/index.js` 以调整后端 API
2. 修改 `frontend/index.html` 以调整前端界面
3. 重新部署到 Cloudflare

## 故障排除

### 前端无法连接后端
- 检查 `frontend/index.html` 中的 API_BASE_URL 是否正确
- 确认 Workers 服务已成功部署并可访问

### 部署失败
- 检查配置文件语法
- 确认文件路径正确
- 查看部署日志获取详细错误信息

## 进阶功能

如需添加持久化数据存储：
1. 在 Cloudflare Dashboard 中创建 D1 数据库
2. 修改 `wrangler.toml` 配置 D1 连接
3. 在 `src/index.js` 中使用 D1 API 替代内存存储