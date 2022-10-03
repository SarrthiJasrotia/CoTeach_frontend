import { useState } from 'react'
function Tabs(props) {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className="container">
      <div className='bloc-tabs'>
        <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>  Content</div>
        <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}> Take Notes</div>
      </div>

      <div className='content-tabs'>
        <div className={toggleState === 1 ? 'content active-content' : 'content'}>
          <h2>CONTENT</h2>
          <p>Loremsdhsalkdj adiushdjashdoah ddsahdkjhas d oiahdkjash dapo dljkasd lasljdj
            sdujolkasjdlkasjlkdjaslkjdkl adiushdjashdoahsj djaslkdjklajsdkljaskljdas dapod oksajhsdkl
            djopsajdlkjaslkdsmlksamdl;askdlas'odksa;lkdl;sakdl;kas;ldaskljdjaslkdjlkasjlkdjaslkkjdkjasd.
          </p>
        </div>


        <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <h2>NOTES</h2>
          <p>Lorslkdjklajsdkljaskljdas dapod oksajhsdk
            lemsdhsalkdj adiushdjashdoah ddsahdkjhas d oiahdkjash dapo dljkasd lasljdj
            sdujolkasjdlkasjlkdjaslkjdkl adiushdjashdoahsj dja
            djopsajdlkjaslkdsmlksamdl;askdlas'odksa;lkdl;sakdl;kas;ldaskljdjaslkdjlkasjlkdjaslkkjdkjasd.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Tabs;