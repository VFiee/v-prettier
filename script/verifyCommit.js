/* eslint-disable */
const chalk = require("chalk");
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require("fs").readFileSync(msgPath, "utf-8").trim();

const releaseRE = /^v\d/;
const commitRE = /^(revert: )?(feat|fix|docs|refactor|perf|test|workflow|ci|chore|types|style|wip|release|deps|script)(\(.+\))?: .{1,50}/;
// chore 构建过程或辅助工具的变动

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.error(
    `${chalk.bgRed.white(`COMMIT ERROR`)} 
     ${chalk.red(`Invalid commit message format ---> ${msg}`)}
     ${chalk.red(
       `Proper commit message format is required for automated changelog generation.`
     )}
     Example:
      ${chalk.green(`feat(ui): add git commit-msg hook`)}
    `
  );
  process.exit(1);
}
