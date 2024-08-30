import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import { FormFeilds,Loader } from '../components';

const CreatePost = () => {
const navigate=useNavigate();
const [form,setform]=useState({
  name:'',
  prompt:'',
  photo:'',
});

const [generatingImg, setgeneratingImg] = useState(false);
const [loading, setloading] = useState(false);

const generateImg=async()=>{
  if(form.prompt){
    try {
      setgeneratingImg(true);
      const response=await fetch('http://localhost:8080/api/v1/dalle',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({prompt:form.prompt}),
      })

      const data=await response.json();
      setform({...form,photo:`data:image/jpeg;base64,${data.photo}`})
    } catch (error) {
      alert(error);
    }finally{
      setgeneratingImg(false);
    }
  }else{
  alert('Please enter a prompt')
}}

const handleSubmit = ()=>{}


const handleChange=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}
const handleSurpriseMe=()=>{
  const randomPrompt=getRandomPrompt(form.prompt);
  setform({...form,prompt:randomPrompt})
}



return(
  <section className='max-w-7xl mx-auto'>
    <div>
        <h1 className="font-extrabold text-[#322328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Create imaginative and visually stunning images through DALL-E AI and share them with the community
        </p>
      </div>
      <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit} >
      <div className="flex flex-col gap-5">
        <FormFeilds
        LabelName='Name'
        type='text'
        name='name'
        placeholder='Jhon Doe'
        value={form.name}
        handleChange={handleChange}
        />
         <FormFeilds
        LabelName='Prompt'
        type='text'
        name='prompt'
        placeholder='A plush toy robot sitting aganist a yellow wall'
        value={form.prompt}
        handleChange={handleChange}
        isSurpriseMe
        handleSurpriseMe={handleSurpriseMe}
        />
       <div className="relative bg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64
        flex justify-center items-center">
            {
              form.photo ? (
                <img 
                  src={form.photo}
                  alt={form.prompt}
                  className='w-full h-full object-contain'
                  />
              ):
              (
                <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"/>
              )}

              {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
        </div> 
      </div>
      <div className="mt-5 flex gap-5">
        <button type="button" onClick={generateImg}  className='text-white bg-green-700 font-medium rounded-md text-sm w-full  px-5 py-2.5 text-center'>
            {generatingImg ? 'Generating...' : 'Generate'}
        </button>
      </div>
      
      <div className="mt-10">
        <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you want, you can share it with others in the community</p>

        <button type='submit' className='
        mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
          {loading ? 'Sharing...':'Share with the community'}
        </button>
      </div>

      </form>
  </section>
)
}
export default CreatePost;