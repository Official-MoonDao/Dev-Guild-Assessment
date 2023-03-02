# Dev-Guild Guide
---
## Table of Contents

1. [**Welcome**](#welcome)
2. [**VSCode**](#vscode)
    - [**Basics**](#vscode-basics)
    - [**Extensions**](#vscode-extensions)
    - [**Shortcuts**](#vscode-shortcuts)
3. [**Notes**](#notes)
4. [**Best Practices & Styling**](#best-practices--styling)
    - [**Reusable components & functions**](#create-reusable-components-and-functions)
    - [**Formatting**](#formatting)
    - [**Follow README**](#follow-readme)
5. [**README**](#readme)
    - [**Formatting**](#readme-formatting)
6. [**GitHub**](#github)
    - [**Create an account**](#create-an-account)
    - [**Create a remote repository](#create-a-remote-repository)
    - [**Fork a repository**](#fork-a-repository)
    - [**Create a local repository**](#create-a-local-repository)
    - [**Pull**](#pull)
    - [**Push**](#push)
---
## Welcome!
***Welcome to MoonDAO's Dev-Guild!***
Are you looking to contribute at MoonDAO? You have come to the right place!

**Abstract:** The primary goal of the Developer Guild will be to lay a foundation for the dev guild will also serve as a pool of technical contributors MoonDAO projects can outsource work to or bring on to their teams. The guild will administer bounties and help form projects aligned with the objectives of the guild.

**Motivation:** Day-to-day processes in DAOs are slow and require a lot of overhead work. The Developer Guild’s goal is to improve the efficiency of these processes to increase the speed of work done inside the DAO. After all, we only have about 7 years to get to the moon.

**Roles:**
1. Dev Guild Follower (L0) - This role is for people that are interested in the developer guild, and can permissionlessly assign themselves this role to keep updated with guild progress. This role does not mean that they are a member of the guild, but would like to see what is going on.
2. Dev Guild Newbie (L1) - This role is for people that are accepted into the guild with the potential to contribute, but still need to be onboarded to the guild. This role will be able to apply for bounties listed by the dev guild. Once deemed fit, Dev Guild Newbies can be promoted to Agents by Stewards.
3. Dev Guild Agent (L2) - This role is reserved for contributors who have contributed and know their way around the codebase and workflows in MoonDAO. Those with this role will be able to directly claim bounties listed by the guild.
4. Dev Guild Steward (L3) - Leaders of the guild to ensure consistent and reliable operations of the guild. Stewards can review pull requests.

---
## VSCode
***VSCode is a lightweight source code editor which is available for Windows, macOS, and Linux. => [Download](https://code.visualstudio.com/download)***

⚠ *Using VSCode as your editor is not required but we strongly suggest using it. Extensions such as “Prettier” offered by VSCode are used every day at MoonDAO to help with formatting. The snippet extensions are helpful as well!*

- ### VSCode Basics
    Know your code editor better than the back of your hand! While learning all of the features may seem a little daunting at first it will help you out a ton in the future!

    **Tutorials:**
    => [Getting Started](https://www.youtube.com/watch?v=B-s71n0dHUk)

    => [Editing Code](https://www.microsoft.com/videoplayer/embed/RE4M6Vx)

    => [Productivity Tips](https://www.microsoft.com/en-us/videoplayer/embed/RWGSHk)


- ### VSCode Extensions
    Using VSCode extensions can dramatically improve your workflow! Once you learn to use VSCode along with its extensions you’ll most likely find yourself using it outside of MoonDAO as well! It's a win-win.

    **Tutorial:**
    => [Extensions](https://www.youtube.com/watch?time_continue=170&v=SKcZ3cwX8lA&embeds_euri=https%3A%2F%2Fcode.visualstudio.com%2F&source_ve_path=MjM4NTE&feature=emb_title) 

    **Setup Extensions**
    1. Navigate over to the extensions tab in VSCode
    2. Install Prettier
    3. Install Simple React Snippets
    4. Go to VSCode settings *(File > Preferences > Settings)*
    5. Search "formatter" and ensure the default formatter is set to Prettier
    6. Search "format" and enable "Format on save"



- ### VSCode Shortcuts
    Learning the shortcuts for VSCode or your preferred editor will increase productivity and provide a nicer experience overall.  Let your mouse take a break!

    Here is a list of some of the most commonly used shortcuts in VSCode => [Shortcuts](https://www.sitepoint.com/visual-studio-code-keyboard-shortcuts/)

    You can also create your own shortcuts! (example: CTRL+SHIFT+L prints “console.log();”
    Custom Shortcuts => [Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings#:~:text=All%20keyboard%20shortcuts%20in%20VS,of%20the%20editor%20title%20bar.)

---
## Notes
***Define blocks of code with notes.***

If you create a complex function or component add notes to make your code more readable. Notes are not required for everything, use your best judgment.

---
## Best-Practices & Styling
***Ensure that your code is clear, understandable, and maintainable. Remember the “DRY” rule (Do not repeat yourself).***

- ### Create reusable components and functions
    At MoonDAO we like to create projects that are scalable and organized. When you’re adding to a project or creating your own, ensure that your functions and components are modular and can be reused later on. There are some cases where you may just need to write a quick function that won’t need to be used anywhere else, this is fine. It’s easy to overlook a tool/function that someone else has already created, avoid this by familiarizing yourself with the component, lib, and api folders for a project.


- ### Formatting
    Familiarize yourself with some of the projects that have already been created at MoonDAO so that you have a good idea of how we write our code. 

    **Key Points to Follow:**
      * Ensure all React components begin with an Upper Case letter
      * Add error handling to async functions w/ labels
        - *Ex: console.error(‘google-sheets : appendSpreadsheet’);*
      * Put all utils and api functions in the lib folder
      * Use Next.js api routes when you can
      * Organize your assets in the public folder
      * Use tailwind for styling


- ### Follow README
    Make sure to read the entire README file and follow the instructions along with any additional rules for formatting or styling
---
## README

- ### Formatting
    When writing the README file for a project model it after other README files created by MoonDAO developers. Make sure to use headings, links and bold/italic text.

   * If you are unfamiliar with Markdown please review this guide => [Markdown Guide](https://www.markdownguide.org/basic-syntax/)*

---
## GitHub

- ### Create an account
    If you haven’t created an account already click the link to get started! => [Create a new Github Account](https://github.com/signup?source=login)

- ### Create a remote repository
    A remote Git repository is a copy of the local Git repository that is stored on a server, such as GitHub. When you push changes to the remote repository, Git sends the changes to the server, which then updates the remote repository. This allows multiple people to collaborate on the same project, as they can all make changes to the remote repository and pull changes from it as needed.

    * **Step 1:** Go to [GitHub](https://github.com) and click the “new” button in the upper left-hand corner.

    * **Step 2:** Give your remote repo a name and a description.

    * **Step 3:** Select whether the repo is private or public.
      - Public: everyone can see code
      - Private: only specified collaborators can see code

    * **Step 4:** Skip the README checkbox and .gitignore template (I like to add them in later, you decide) and click “Create Repository”

- ### Fork a repository
    When you fork a repo you are essentially creating a copy of an existing repo.  This is great for developing as you can keep your code in your forked repo until you’re ready to push it to the main repo.

    * **Step 1:** Find the repo you’d like to fork.

    * **Step 2:** Click “Fork” in the upper right-hand corner.

    * **Step 3:** Create the Fork.

- ### Create a local repository
    A local Git repository is a directory on your computer that contains all of the files and version history of a Git project. When you initialize a Git repository in a directory, Git creates a hidden folder called **.git** which contains all of the metadata needed to manage the repository.

    * **Step 1:** Open a new folder with VSCode

    * **Step 2:** Open the terminal (CTRL + J)
    
    * **Step 3:** Initialize a **.git** file
    - Run `git init`

- ### Pull
    **git pull** is a Git command that is used to update a local Git repository with changes from a remote repository. When you run git pull, Git fetches the changes from the remote repository and then merges them into the current branch of your local repository.

    * **Step 1:** If you’re pulling a project for the first time, open an empty folder and initialize git.

    * **Step 2:** Link your local repo with the remote repo you wish to pull from
    - Go to GitHub and choose a repo you have created or have forked
    - Click the “<> Code” button on the right-hand side
    - Copy the HTTPS url
    - Open the terminal in VSCode
    - Run `git remote add origin paste-your-HTTPS-url-here`

    * **Step 3:** Pull the remote repo
    - Go to your repo on GitHub, click the drop-down on the left-hand side, choose a branch that you want to pull from, branches are different versions of the same project, 99% of the time you will be looking for the “main” or “master” branch.
    - Open terminal in VSCode and run `git pull origin branch-name-here`

- ### Push
    git push is a Git command that is used to upload changes from a local Git repository to a remote repository. When you run git push, Git sends the changes you have made in your local repository to the remote repository, updating it with the latest changes.

    * **Step 1:** Open the terminal in VSCode
    * **Step 2:** First add all of the changes you’ve made
    * **Step 3:** Run `git add -A`
    * **Step 4:** Commit changes made to local repo
  	* **Step 5:*** Run `git commit -m “enter-note-about-changes” `
    * **Step 6:** Run `git push origin branch-name-here`

---



