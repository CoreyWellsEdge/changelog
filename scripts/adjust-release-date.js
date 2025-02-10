const exec = require('child_process').exec;
const moment = require('moment-timezone');

// Adjust system date to Brisbane timezone
const brisbaneTime = moment.tz('Australia/Brisbane').format('YYYY-MM-DD HH:mm:ss');
const commitMessage = 'Release with adjusted commit date for Brisbane timezone';

// Run the Git command to set the commit date and trigger the release
exec(`GIT_COMMITTER_DATE="${brisbaneTime}" git commit --amend --no-edit --date "${brisbaneTime}" && git push --force`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error adjusting commit date: ${error}`);
    return;
  }

 // console.log(`Commit date adjusted to Brisbane time: ${brisbaneTime}`);
});
