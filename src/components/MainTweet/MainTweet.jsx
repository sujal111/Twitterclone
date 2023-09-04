import React from 'react'

const MainTweet = () => {
  return (
    <div>
    <p className="font-bold pl-2 my-2">Username</p>
    <form className="border-b-2 pb-6">
    maxlength={280}
<textarea  type="text" placeholder="what's happening" className="bg-slate-200 rounded-lg 2-full p-2"></textarea>


<button >Tweet</button>
    </form>
    MainTweet
    </div>
  )
}

export default MainTweet
