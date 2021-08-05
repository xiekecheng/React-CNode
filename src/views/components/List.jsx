import React from 'react';

const List = (props) => (
    <ol className="ol_style">
            {props.articleList.map((item) => {
              return (
                <li className="liStyle" key={item.id}>
                  <a href="#">
                    <img className="avatar" src={item.author.avatar_url} />
                  </a>
                  <span className="reply_count">
                    {item.reply_count}/{item.visit_count}
                  </span>
                  <span
                    v-if="(['shareAll','askAll','goodAll','jobAll'].includes(item.tab))||item.tab=='good'||item.good||item.top"
                    className="topic-tab"
                  >
                    {item.tab}
                  </span>
                  <a className="topic-title" href="#">
                    {item.title}
                  </a>
                  <a className="fr datetime" href="#">
                    <img
                      className="smallAvatar"
                      src="https://avatars.githubusercontent.com/u/958063?v=4&s=120"
                    />
                    <span className="date" v-text="item.last_reply_at">
                      {props.calDate(item.last_reply_at)}
                    </span>
                  </a>
                </li>
              )
            })}

            {/* <li className="liStyle" v-for="item in list">
            <a href="#"><img className="avatar" src={''} /></a>
            <span className="reply_count">回复/总数</span>
            <span v-if="(['shareAll','askAll','goodAll','jobAll'].includes(item.tab))||item.tab=='good'||item.good||item.top" className="topic-tab" >置顶</span>
            <a className="topic-title" href="#" v-text="item.title">基于 Electron 实现 uTools 的超级面板</a>
            <a className="fr datetime" href="#">
            <img className="smallAvatar" src="https://avatars.githubusercontent.com/u/958063?v=4&s=120" />
            <span className="date" v-text="item.last_reply_at">2小时前</span></a>
        </li> */}
          </ol>
    );

export default List;