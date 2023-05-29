import React from 'react'
import Articles from '../components/articles';

function Home() {
  const firstartcl={
      img:"https://c8.alamy.com/comp/2GCA8W8/business-concept-background-article-writing-word-cloud-design-template-2GCA8W8.jpg",
      text:"Monday Morning is the student Media Body of National Institute Of Technology Rourkela. We cover all the events, issues and activities going on inside the campus. We serve as a link between the administration and the students"

}
  return (
    <>
    this is home page
    <section  className='arrange'>
       
      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      <Articles 
      img={firstartcl.img}
      text={firstartcl.text}
      ></Articles>

      


    </section>
  </>
  );
}

export default Home
