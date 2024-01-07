import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../../css/CreatePost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link'],
        ['clean']
    ]
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',
]

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [file,setFile] = useState('');
    const [redirect,setRedicrect] = useState(false);

    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body:  data,
        });
        
        if(response.ok) {
            setRedicrect(true);
        }
    }

    if(redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='create-post-page'>
            <div className="post-Ex-wrapper contact-me-wrapper">
                <div className="title">
                        <h3>CREATE YOUR POST</h3>
                </div>
            </div>

            <form class="create-post-container" onSubmit={createNewPost}>
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
                <fieldset>
                    <legend><span className='form-section-titles'>Choose Image</span></legend>
                    <input 
                        type="file"
                        onChange={ev => setFile(ev.target.files)}
                    />
                </fieldset>
                <fieldset>
                    <legend><span className='form-section-titles'>Your story goes here...</span></legend>
                    <ReactQuill 
                        theme='snow' 
                        value={content} 
                        modules={modules} 
                        formats={formats}
                        onChange={newValue => setContent(newValue)} 
                    />
                </fieldset>
                
                <button>Create post</button>
            </form>
        </div>
    );
}