import icon1 from '../assets/img/basic.png'
import icon2 from '../assets/img/tool.png'
import icon3 from '../assets/img/frame.png'
import icon4 from '../assets/img/softpower.png'
import '../App.scss'


const SkillsBasic = [
    {content:'①-熟悉使用html5,css3技术,用响应式布局写个人简历网站，能够熟练制作静态页面'},
    {content:'②-熟悉JavaScript数据类型,原型链,作用域等知识,能熟练使用map,filter等方法操作数据'},
    {content:'③-熟悉TypeScript,能够熟练使用泛型，交叉类型，非空断言等方法为数据做类型保护'},
    {content:'④-熟悉ES6规范,如箭头函数,模板字符串,解构赋值,async,await等常用知识'},
    {content:'⑤-熟悉ajax构建过程,掌握fetch,axios,XML不同方式请求数据,能够熟练二次封装axios调用接口,解决前后端联调跨域等问题'}
]

const SkillsTool =[
    {content:'①-在企业中使用过git进行代码管理,熟悉企业中基本提交代码流程,掌握git cherry-pick,git merge等基本知识'},
    {content:'②-掌握docker基本原理,以及linux基本语法和常用语句,了解docker部署项目的基本流程'},
    {content:'③-掌握webpack基本配置,了解webpack打包原理,能够熟练使用webpack进行项目打包'},
    {content:'④-掌握npm,yarn,pnpm等包管理工具,能够熟练使用npm,yarn,pnpm进行项目依赖管理'},
    {content:'⑤-掌握chatGpt,文心一言等等Ai工具使用方法,对于提问技巧有一定学习,能够独立高效解决问题'},
    {content:'⑥-使用过lodash,dayjs,tailwind,prettier,eslint,husky等工具,熟练使用这些工具提高开发效率和代码规范'}
]


const SkillsFrame=[
    {content:'①-熟练使用react,react-router,react-redux等react生态圈,能够熟练使用react-router进行路由管理,熟练使用react-redux,mobx进行状态管理'},
    {content:'②-熟练使用vue2/3,vue-router@3/4,vuex/pinia等vue生态圈,能够熟练使用vue-router进行路由管理,熟练使用vuex/pinia进行状态管理'},
    {content:'③-有使用过uniapp进行跨端开发,了解uniapp基本原理,能够熟练使用uniapp进行跨端开发'},
    {content:'④-有过vue3+TS和React+TS项目开发经验,能够熟练使用TS结合不同框架开发'},
    {content:'⑤-熟悉element-ui/plus以及ant-design,echart,naive等ui库,能够结合对应框架进行快速网站搭建'},
    {content:'⑥-注重代码组件化,代码可读性和规范性,熟练使用react-hook,vue全家桶的不同层级之间的数据通信'}
]

const SkillsOther=[

    {content:'①-有过ppt兼职经验,对于布局,动画,交互等有学习,其基本原理能够结合前端技术引发思考'},
    {content:'②-有过Ai绘画兼职经验,对于Ai绘画工具midjounery有学习,能够将需求快速转化为结果'},
    {content:'③-兼职经历让我能够快速理解用户需求,并且高要求高标准,能够快速解决问题和实现需求'},
    {content:'④-有c,c++,java基础知识,知道后端基本开发流程，能够配合前端查找问题'},
]

export const SKILLS = [
    {
        title:"前端基础",
        icon:icon1,
        skills:SkillsBasic.map((item,index)=>{
            return <p className='skill-p' key={index}>{item.content}</p>})
    },
    {
        title:"前端工具",
        icon:icon2,
        skills:SkillsTool.map((item,index)=>{
            return <p className='skill-p' key={index}>{item.content}</p>})
    },
    {
        title:"前端框架",
        icon:icon3,
        skills:SkillsFrame.map((item,index)=>{
            return <p className='skill-p' key={index}>{item.content}</p>})
    },
    {
        title:"其他技能",
        icon:icon4,
        skills:SkillsOther.map((item,index)=>{
            return <p className='skill-p' key={index}>{item.content}</p>})
    }
]

const WORK1=[
{
    content:'职责：公司业务官网功能的修改，样式的修改，功能改动'
},
{
    content:'技术栈: 涉及到的有vue3+TS,react+Ts,uniapp,微前端'
}
]

const WORK1_LRAEN=[
{
    content:'1.在复杂的代码组件化中学会了快速找到对应页面代码，用全局搜索，组件跳转等方法找到需求所在文件'
},
{
    content:'2.学会了企业级git提交代码流程,git cherry-pick的使用以及不同分支拥有具体功能的思想'
},
{
    content:'3.面对复杂项目能够沉着去分析其结构,学会了使用递归实现动态路由,breadCrumb,navibar等常用组件的封装'
},
{
    content:'4.了解了企业级登录流程,使用AES加密数据的方法'
},
{
    content:'5.学会了mvn控制nodejs的版本,有一些老项目需要切换低版本nodejs'
}
,{
    content:'6.学会了为项目切换主题色'
},
{
    content:'7.明白了cookie,session,localstorage存储方式的区别'
},
{
    content:'8.对不同环境(dev,prod,uat)所需要做的事情有了概念'
},
{
    content:'9.参与需求评审和后端讨论需求，能够快速理解需求改动并实现需求'
}

]



export const WORK = [

{
    company:"虎彩集团-呼应科技有限公司",
    position:"前端开发实习生",
    mission:WORK1.map((item,index)=>{
        return <p className='work-misssion' key={index}>{item.content}</p>}),
    date:"2024-4 至 2024-5  (因学校临时修改实训时间，时间冲突，因此只实习了一个月）",
    learn:WORK1_LRAEN.map((item,index)=>{
        return <p className='work-learn' key={index}>{item.content}</p>}),
    
},
{
    company:"敬请期待",
    position:"前端开发",
    mission:"负责公司官网、活动页、后台管理系统的开发",
    date:"2018.03-至今",
    learn:"前端技术进步"
},
{
    company:"敬请期待",
    position:"前端开发",
    mission:"负责公司官网、活动页、后台管理系统的开发",
    date:"2018.03-至今",
    learn:"前端技术进步"
}


]

