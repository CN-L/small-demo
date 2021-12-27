// TODO 获取Cookie的值
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga');

// TODO 颜色RGB转十六进制
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
rgbToHex(0, 51, 255); 

// TODO 复制到剪贴板
const copyToClipboard = (text) => navigator.clipboard.writeText(text);  
copyToClipboard("Hello World");

// TODO 检查日期是否合法
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
isDateValid("December 17, 1995 03:24:00");
// Result: true

// TODO 查找日期位于一年中的第几天
const dayOfYear = (date) =>
Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
// Result: 272

// TODO 英文字符串首字母大写
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
capitalize("follow for more")
// Result: Follow for more

// TODO 计算2个日期之间相差多少天
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// Result: 366

// TODO 清除全部Cookie
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// TODO 生成随机十六进制颜色
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());
// Result: #92b008

// TODO 从 URL 获取查询参数
Object.fromEntries(new URLSearchParams(window.location.search))
// 或者
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(URL);
};

getParameters(window.location);

// TODO 时间处理
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00"

// TODO 求数字平均值

const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5

// TODO 反转字符串
const reverse = str => str.split('').reverse().join('');
reverse('hello world');     
// Result: 'dlrow olleh'

// TODO 检验数组是否为空
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true

// TODO 获取用户选择的文本
const getSelectedText = () => window.getSelection().toString();
getSelectedText();

// TODO 打乱数组
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
    
console.log(shuffleArray([1, 2, 3, 4]));

// TODO 检查用户的设备是否处于暗模式
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    
console.log(isDarkMode) 
// Result: True or False