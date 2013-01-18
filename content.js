(function(){
  // select the github-pages link from the branches menu
  var githubPagesLink = $('[data-name="gh-pages"]');
  var descriptionLink = $('#repository_homepage p a');

  // only go on if a link was found and
  // if not already a link was specified
  if(githubPagesLink.length == 0 || descriptionLink.length > 0) return;

  // remve the http stuff
  var href = location.href;
  href = href.replace('http://github.com/', '');
  href = href.replace('https://github.com/', '');

  // get the username and the reponame from the URL
  var split = href.split('/');
  var username = split[0];
  var reponame = split[1];

  // stop if we were not able to find a username or a reponame
  if(!username || !reponame) return;

  // removes hash-stuff from the url 
  // e.g. from sth like this ->
  // https://github.com/username/repo#readme
  var hashIndex = reponame.indexOf('#');
  if(hashIndex >= 0)
    reponame.substring(0, hashIndex);

  // construct the url
  var ghPagesURl = 'http://' + username + '.github.com/' + reponame;

  var linkElement = $('<a/>').attr('href', ghPagesURl).attr('rel', 'nofollow').text(ghPagesURl);

  // append it to the box
  $('#repository_homepage p').append(linkElement);
})();