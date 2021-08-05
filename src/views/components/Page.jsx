import React, { useEffect, useState } from 'react'

const handleClick = (e, item, setPage) => {
  console.log(item)
  e.preventDefault()
  setPage(item)
}
const Page = (props) => {
  const { page, setPage } = props
  const [pageList, setPageList] = useState([])
  //   上一页
  const prevPage = () => {
    if (page === 1) {
      return false
    }
    setPage(page - 1)
  }
  //   下一页
  const nextPage = () => {
    setPage(page + 1)
  }

  //
  //   渲染分页列表
  useEffect(() => {
    page > 3
      ? setPageList([page - 2, page - 1, page, page + 1, page + 2])
      : setPageList([1, 2, 3, 4, 5])
  }, [page])

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li onClick={() => prevPage}>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          {pageList.map((item) => (
            <li key={item}>
              <a
                onClick={(e) => handleClick(e, item, setPage)}
                className={item === page ? 'onhlight' : ''}
                href="#"
              >
                {item}
              </a>
            </li>
          ))}

          <li onClick={() => nextPage}>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Page
