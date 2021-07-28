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
const optArticleTagsSelector = '.post-tags .list';
  
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
    console.log(article);
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

function generateTags(){
  
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
    
  /* START LOOP: for every article: */
  for (let article of articles){
      
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
    console.log('Tags wrapper found!', titleList);

    /* make html variable with empty string */
    
    let html = '';
    
    /* get tags from data-tags attribute */
    console.log(article);
    const articleTags = article.getAttribute('data-tags');
    
    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
  
    /* START LOOP: for each tag */
    
    for (let tag of articleTagsArray) {
      console.log('Generate tags:', tag);

      /* generate HTML of the link */
      
      //let linkHTML =
      //'<li><a href="#tag-' + tag + '"> <span>' + tag + "</span></a></li>";
      //console.log("HTML created!", linkHTML);

      const linkHTMLData = { name: tag };
      const linkHTML = templates.tagArticleLink(linkHTMLData);
      
      /* add generated code to html variable */
      
    } 
     
    titleList.innerHTML = html;
      console.log(titleList);
      
      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
  }
  /* END LOOP: for every article: */
}   
  
generateTags();

function tagClickHandler(event){
/* prevent default action for this event */
  
  event.preventDefault();
/* make new constant named "clickedElement" and give it the value of "this" */
  
  const clickedElement = this;
  console.log('Tag was clicked!');

  /*make a new constant "href" and read the attribute "href" of the clicked element */
  
  const href = clickedElement.getAttribute('href');
  console.log('Found:', href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');
  console.log('Clicked: ', tag);

  /* find all tag links with class active */
  
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('activeTags:', activeTags);

  /* START LOOP: for each active tag link */
  
  let html = '';
  console.log(html)
  
  for (let activeTag of activeTags) {

    /* remove class active */
    
    activeTag.classList.remove('active');
    
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  
  /* START LOOP: for each found tag link */
  
  for (let tagLink of tagLinks) {
    
    /* add class active */
    
    tagLink.classList.add('active');
    console.log('TagLinks is ', tagLinks);
    
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

  function addClickListenersToTags(){
 
    /* find all links to tags */
    
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
    console.log('tagLinks', tagLinks)
  
    /* START LOOP: for each link */
  
  for (let tagLink of tagLinks) {
    
    /* add tagClickHandler as event listener for that link */
   
    tagLink.addEventListener('click', tagClickHandler);
    
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

const optArticleAuthorSelector = '.post-author';

function generateAuthors() {
  let allAuthors = {};

  /* find all articles */

  let articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for (let article of articles){
    
    /* find authors wrapper*/
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('Authors wrapper found!', authorsWrapper);

    /* make html variable with empty string */

    let html = '';

     /* get author from data-authors attribute */

     const author = article.getAttribute('data-author');
     console.log('Found!:', author);

     /* generate HTML of the link */

      // let linkHTML =
    // ' <a href="#author-' + author + '"> <span>' + author + " </span></a>";
    // console.log("HTML created!", linkHTML);

    const linkHTMLData = { name: author };
    const linkHTML = templates.authorArticleLink(linkHTMLData);

    /* add generated code to html variable */

    html = html + linkHTML;

    /* insert html of all link into the tags wrapper */

    authorsWrapper.innerHTML = html;
    console.log(html);
    
    /* END LOOP for every article */
  }
}
generateAuthors();

function authorClickHandler(event) {
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log("Author was clicked!");

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute("href");
  console.log("Found:", href);

  /* make a new constant "auhor" and extract author from the "href" constant */
  const author = href.replace("#author-", "");

  /* find all author links with class active */

  const activeAuthorLinks = document.querySelectorAll(
    'a.active[href^="#author-"]'
  );
  console.log("Active author found!", activeAuthorLinks);

  /* START LOOP: for each active author link */

  for (let activeAuthorLink of activeAuthorLinks) {
    /* remove class active */

    activeAuthorLink.classList.remove("active");

    console.log("Class active removed!");

    /* END LOOP: for each active author link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log("Found: ", authorLinks);

  /* START LOOP: for each found author link */

  for (let authorLink of authorLinks) {
    /* add class active */

    authorLink.classList.add("active");
  }
  console.log("Class active is added to authors!");

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');
}
function addClickListenersToAuthors() {
  /* find all links to authors */

  const linkAuthors = document.querySelectorAll('a[href^="#author-"]');
  console.log("All author links found!");

  /* START LOOP: for each link */

  for (let linkAuthor of linkAuthors) {
    /* add authorClickHandler as event listener for that link */

    linkAuthor.addEventListener("click", authorClickHandler);

    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors();
