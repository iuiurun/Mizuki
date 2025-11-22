// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "ドリームトレイン Blog",
		imgurl: "https://pc.094521.xyz/favicon.jpg",
		desc: "一个摆烂的年更Blog",
		siteurl: "https://blog.094521.xyz/",
		tags: [""],
	},
		{
		id: 2 ,
		title: "XIN's Blog",
		imgurl: "https://www.konoxin.top/images/avatar.png",
		desc: "兴趣使然",
		siteurl: "https://www.konoxin.top",
		tags: [""],
	},
	{
		id: 3,
		title: "流月小站",
		imgurl: "https://cdn.liuyue.net/assets/img/avatar.jpg",
		desc: "且听风吟，静待花开",
		siteurl: "https://blog.flowmoon.cn/",
		tags: [""],
	},
	{
		id: 4,
		title: "星辰の笔记",
		imgurl: "https://blog.strarry.top/avatar.jpg",
		desc: "Code | Think | Share | Repeat",
		siteurl: "https://blog.strarry.top/",
		tags: [""],
	},
	{
		id: 5,
		title: "寒士杰克",
		imgurl: "http://q1.qlogo.cn/g?b=qq&nk=2959602696&s=100",
		desc: "个人博客，持续分享网站部署实战经验、精选书评解读和生活观察手记。 这里提供可复用的技术教程、深度阅读指南和真实生活洞察，与技术爱好者一起进步......",
		siteurl: "https://www.hansjack.com/",
		tags: [""],
	},


];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
