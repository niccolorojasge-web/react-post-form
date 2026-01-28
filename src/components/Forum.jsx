import { useState } from 'react'

//import './App.css'

function Forum() {
    const [data, setData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })
    function handleform(e) {
        const value =
        e.target.type ==="checkbox"?
        e.target.checked : e.target.value;
        setData({
            ...data,
            [e.target.name]:value,
         });
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <form>
                        <div className='row'>
                            <div className='col'>
                                <input
                                    name="author"
                                    type="text"
                                    placeholder="author"
                                    value={data.author}
                                    onChange={handleform}
                                />
                            </div>
                            <div className='col'>
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="title"
                                    value={data.title}
                                    onChange={handleform}
                                />
                            </div>
                            <label htmlFor="">
                                <textarea
                                    name="author"
                                    type="textarea"
                                    placeholder="body"
                                    value={data.body}
                                    onChange={handleform}
                                    rows={8}
                                    wrap='wrap'
                                />
                            </label>
                            <div>
                              
                              <input type="checkbox"
                              name="public"
                              checked={data.public}
                              onChange={handleform}
                              />
                              <label htmlFor="public">
                                  post pubblic
                              </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">posta post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forum