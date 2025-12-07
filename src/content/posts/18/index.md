---
title: 免费域名并添加至 Cloudflare 支持解析 IPv6（已亲测可用）
published: 2025-12-07T08:00:00
description: 支持直接改NS托管到 Cloudflare Free 计划，完美支持 IPv4 + IPv6 解析（AAAA + 橙色云代理）
image: 
tags: [cloudflare,免费域名]
category: 域名
draft: false
---


最近发现一个还能白嫖的免费域名后缀 —— **de5.net**，最重要的是**支持直接托管到 Cloudflare**，完美支持 IPv4 + IPv6 双栈解析，完全免费！

### 一、注册免费 de5.net 域名

注册地址：https://www.dnshe.com  
邀请码（一人一个名额，用完即止）：**SEBE5C1B9F**

> 小贴士：  
> 如果网页验证码一直过不去，建议换个浏览器尝试。  
> 我本人是用**微信内置浏览器**打开链接直接注册成功的，其他浏览器可能被风控。

注册并登录后，直接搜 de5.net 后缀的域名，想注册什么前缀随便挑（目前库存还算多）。

### 二、把域名托管到 Cloudflare（支持 Free 免费计划）

1. 登录 Cloudflare 官网：https://dash.cloudflare.com  
2. 点击 **“Add a website”** → 输入刚注册的 xxx.de5.net 域名  
3. 选择 **Free 免费计划** → 继续  
4. Cloudflare 会扫描现有 DNS 记录（基本没有，跳过即可）  
最后一步会给你两个 Cloudflare 的 Nameserver（NS）地址，例如：
ns1.cloudflare.com
   ns2.cloudflare.com

（实际以你页面显示为准，每个账号分配的 NS 可能不一样）

### 三、回到 dnshe.com 修改 NS 记录

1. 登录 https://www.dnshe.com  
2. 找到你刚注册的域名 → 点击 **“域名解析”** 或 **“NS管理”**  
3. 把 Cloudflare 给你的那两个 NS 地址**一行一个**填进去，删除原来的默认 NS  
4. 保存提交

### 四、等待 NS 解析生效

一般 5～30 分钟，最慢不超过 24 小时就可以在 Cloudflare 后台看到域名状态变成 **Active**（绿色）。

### 五、在 Cloudflare 添加解析记录（重点支持 IPv6）

状态变 Active 后，就可以随便添加记录了：

- IPv4 解析 → 用 `A` 记录指向服务器 IP  
- 网站走 CDN → 用 `CNAME` 记录指向真实源站（记得开代理橙色云）  
- IPv6 解析 → 用 `AAAA` 记录填 IPv6 地址，**一定要把小云朵打开（代理模式）**，这样 Cloudflare 会免费给你做 IPv6 网关，即使你的源站没有 IPv6 也能让访客通过 IPv6 访问！


整个过程完全免费：
- 域名免费（de5.net）
- Cloudflare Free 计划免费
- 支持完整 DNS 管理 + IPv6 代理

虽然 de5.net 这个后缀听起来有点“神秘”，但能白嫖 Cloudflare 全套功能已经血赚，拿来做个人博客、短链、测试环境完全够用～


官方活动：每邀请一人成功注册并解析，你和对方都能额外获得免费域名注册名额。

用完的兄弟可以在评论区留下你的邀请码，大家互相助力一下（尽管这个后缀也没啥大用，但能多白嫖几个总是香的😂）

我的邀请码再次放出：**SEBE5C1B9F**（如果显示已用，说明被抢光了，欢迎留言交换～）

白嫖愉快！✌
