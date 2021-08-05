import React from 'react';

const headerList = [
  {
    id: 1,
    name: '全部',
    value: '',
  },
  {
    id: 2,
    name: '精华',
    value: 'good',
  },
  {
    id: 3,
    name: '分享',
    value: 'share',
  },
  {
    id: 4,
    name: '问答',
    value: 'ask',
  },
  {
    id: 5,
    name: '招聘',
    value: 'job',
  },
]

const Header = (props) => {
  const {tab,setTab} = props
  const handleClick=(value)=>{
    console.log(value);
  setTab(value)
}
  return(
  
    <ul className="nav nav-pills">
            {headerList.map((item) => {
              return (
                <li key={item.id} onClick={()=>handleClick(item.value)}>
                  <a href="#" className={tab===item.value?"active":''}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
    )};

export default Header;