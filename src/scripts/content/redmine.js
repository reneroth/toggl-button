/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('h2', {}, function (elem) {
  var link, description,
    numElem = $('h2'),
    titleElem = $('.subject h3'),
    projectElem = $('h1');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'redmine',
    description: description,
    projectName: projectElem && projectElem.textContent
  });

  $('h2').appendChild(link);
});
