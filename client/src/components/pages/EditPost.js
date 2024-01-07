import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import '../../css/CreatePost.css';
import Editor from './Editor';

export default function EditPost() {
    const [searchParams] = useSearchParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [category,setCategory] = useState('');
    const [tags,setTags] = useState('');
    const [content,setContent] = useState('');
    const [file,setFile] = useState('');
    const id = searchParams.get('blogId');
    const [redirect,setRedicrect] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/post/' + id)
        .then(reponse => {
            Response.json().then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setTags(postInfo.tags);
                setContent(postInfo.content);
                setFile(postInfo.file)
            })
        })
    }, []);

    async function updatePost(ev) {
        ev.preventDefault();
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }
    return(
        <div className='create-post-page'>
            <div className="post-Ex-wrapper contact-me-wrapper">
                <div className="title">
                        <h3>EDIT YOUR POST</h3>
                </div>
            </div>

            <form class="create-post-container" onSubmit={updatePost}>
                <fieldset>
                    <legend for="title"><span className='form-section-titles'>Title</span></legend>
                    <input type="title" 
                        placeholder={'Title'} 
                        value={title} 
                        onChange={ev => setTitle(ev.target.value)} 
                        required 
                    />
                </fieldset>

                <fieldset>
                    <legend><span className='form-section-titles'>Summary</span></legend>
                    <input 
                        type="summary" 
                        value={summary}
                        onChange={ev => setSummary(ev.target.value)}
                        placeholder={'Summary'} 
                    />
                </fieldset>

                <div className='cats-tags'>
                    <fieldset>
                        <legend><span className='form-section-titles'>Category</span></legend>
                        <input 
                            type="category" 
                            value={category}
                            onChange={ev => setCategory(ev.target.value)}
                            placeholder={'Tech / Adventure'} 
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <legend><span className='form-section-titles'>Tags</span></legend>
                        <input 
                            type="tags" 
                            value={tags}
                            onChange={ev => setTags(ev.target.value)}
                            placeholder={'genius, gaming'}
                            required
                        />
                    </fieldset>
                </div>

                <fieldset>
                    <legend><span className='form-section-titles'>Choose Image</span></legend>
                    <input 
                        type="file"
                        onChange={ev => setFile(ev.target.files)}
                    />
                </fieldset>


                <fieldset>
                    <legend><span className='form-section-titles'>Your story goes here...</span></legend>
                    <Editor 
                        value={content} 
                        onChange={setContent}
                    />
                </fieldset>
                
                <button>Create post</button>
            </form>
        </div>
    );
}