import React, { useEffect, useState } from 'react'
// import axios from '@/utils/axios';
// import { Layout } from 'antd';
import { fetchTopic } from '@/api/index.js'
import '@/assets/forum.css'
import calDate from '@/utils/calDate'
console.log(calDate('2021-08-05T00:00:48.703Z'))
import Navigation from './components/Nav'
import Header from './components/Header'
import List from './components/List'
import Page from './components/Page'
// const { Header, Footer, Sider, Content } = Layout;
// import ListContent from './ListContent';
// const headerList = [
//   {
//     id: 1,
//     name: '全部',
//     value: '',
//   },
//   {
//     id: 2,
//     name: '精华',
//     value: 'good',
//   },
//   {
//     id: 3,
//     name: '分享',
//     value: 'share',
//   },
//   {
//     id: 4,
//     name: '问答',
//     value: 'ask',
//   },
//   {
//     id: 5,
//     name: '招聘',
//     value: 'job',
//   },
// ]
// const Page = () => {
//   const prevPage = () => {
//     console.log(111)
//   }
//   const nextPage = () => {
//     console.log(222)
//   }
//   return (
//     <div>
//       <nav>
//         <ul className="pagination">
//           <li onClick={() => prevPage}>
//             <a href="#" aria-label="Previous">
//               <span aria-hidden="true">«</span>
//             </a>
//           </li>
//           {/* <li v-for='i in arr'><a @click.prevent='$emit("input",i)' :class="{onhlight:i===value}" href="#">{{i}}</a></li> */}
//           <li onClick={() => nextPage}>
//             <a href="#" aria-label="Next">
//               <span aria-hidden="true">»</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

const Layout = () => {
  const [articleList, setList] = useState([])
  const [tab,setTab] = useState('')
  const [page,setPage] = useState(1)
  useEffect(() => {
    fetchTopic({tab,page}).then((res) => {
      console.log('res', res.data.data)
      setList(res.data.data)
    })
  }, [tab,page])


  return (
    <div id="main">
      {/* 顶部导航栏 */}
      <Navigation />
      <article>
        <div className="header">
          {/* 菜单 */}
          <Header tab={tab} setTab={setTab} />
          {/* 列表 */}
          <List articleList={articleList} calDate={calDate} />
          {/* <ul className="nav nav-pills">
            {headerList.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#" className="active">
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul> */}
        </div>
        <Page page={page} setPage={setPage}  />
      </article>
      <aside></aside>
    </div>
  )
}

export default Layout
