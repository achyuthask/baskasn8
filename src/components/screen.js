import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const Screen = (props) =>{
    const markdown = props.markupdata

  return <div>screen

    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  </div>

}


export default Screen;