import React from 'react'


// {
//     "source": {
//         "id": null,
//         "name": "CNBC"
//     },
//     "author": "Kevin Breuninger, John Melloy",
//     "title": "Trump instructs 'representatives' to buy $200 billion in mortgage bonds, aiming to lower rates - CNBC",
//     "description": "President Donald Trump said he is \"instructing my Representatives\" to buy $200 billion in mortgage bonds.",
//     "url": "https://www.cnbc.com/2026/01/08/trump-mortgage-bonds-rates-fannie-freddie.html",
//     "urlToImage": "https://image.cnbcfm.com/api/v1/image/108241520-1765582682201-gettyimages-2250983479-TRUMP_HOCKEY.jpeg?v=1767912228&w=1920&h=1080",
//     "publishedAt": "2026-01-08T21:37:51Z",
//     "content": "President Donald Trump on Thursday said he is \"instructing my Representatives\" to buy $200 billion in mortgage bonds, claiming that doing so will drive rates and monthly payments down.\r\nTrump, in a T… [+2577 chars]"
// }
export default function NewsItem({article}) {

  const {source, author, title ,description, url, urlToImage, publishedAt, content}=article
  return (
    <div className='news-item-container'>
        <div className='image-container'>
          <h2 className='title'>{title}</h2>
        <img className='thumbnail' src={urlToImage} alt={'thumbnail'}/>
        {author && <p>{author}</p>}
        </div>
        <div className='detail-container'>
            <p>{description}</p>
            
        </div>
    </div>
  )
}
