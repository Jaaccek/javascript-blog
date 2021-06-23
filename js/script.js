'use strict';

  /*document.getElementById('test-button').addEventListener('click', function(){
     const links = document.querySelectorAll('.titles a');
      console.log('links:', links);
    });
    */

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);
    
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');
  
  console.log('clickedElement:', clickedElement);
  
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.active');
  
  for (let activeArticle of activeArticles){
    
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
      
  const articleSelector = clickedElement.getAttribute('href');
      
  console.log('articleSelector:', articleSelector);
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);

  console.log('targetArticle', targetArticle);
  
    /* [DONE] add class 'active' to the correct article */
  
  targetArticle.classList.add('active');

  console.log(targetArticle);
}
    
const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
  
function generateTitleLinks(customSelector = ''){
  console.log('wykonanie funkcji generateTitleLinks')
  /* remove contents of titleList */
  
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  console.log('stała, daje dostęp do elemntu html, a element html ma pole innerHTML dzięki któremu mogę usuwać zawartość' + titleList);

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';

  for(let article of articles){
  
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);
  
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);
    
    /* get the title from the title element */
  
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    
    /* insert link into titleList */
    html = html + linkHTML;
    console.log('utworzony link html:' + html);
  }
  titleList.innerHTML= html;

  const links = document.querySelectorAll('.titles a');
  console.log('links' , links);
  
  for(let link of links){
    link.addEventListener('click' , titleClickHandler);
  }
}
 
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

generateTitleLinks();