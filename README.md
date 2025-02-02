# GenZineers

Hi, and welcome to the official GenZineers GitHub repo! GenZineers is an event hosting platform with the primary goal of hosting STEM university class crash courses to help students pass their exams, whether it's students who are looking for additional practice to stay sharp, or students who are looking to clutch a passing grade in the least amount of time. To help us achieve this, we will hand pick the most impressive tutors from all around the world to teach our courses.

# Expected functionality

Here is a brief description of the expected functionality of the website to help guide the development process and ensure everyone is on the same page. This isn't particularly fleshed out and is very much open to feedback.

### Accounts

The three roles for accounts are user accounts, host accounts, and admin accounts. User accounts will only be able to join events and leave events. Host accounts will be able to anything a user account can do and also create and modify their own events. Admin accounts will have access to all the functionality on the website. Account creation will be done through the Sign In button found on the navigation bar, and logging in through the adjacent Log In button. Account creation will require an e-mail verification. Host accounts and Admin accounts will be manually assigned either by adding the functionality to admin accounts or through direct access to the database.

Account information is saved to the `User` table in the database. This includes the following information: 

* `userID` : The unique identifier for each user.
* `email` : The email used by the user to sign up for the account.
* `name` : The user's display name.
* `eventsHosted` : A list of events that are being hosted by the user.
* `eventsJoined` : A list of events that the user is participating in.
* `createdAt` : The date of creation of the user's account.
* `role` : The users role. These roles are `USER` for user accounts, `SPEAKER` for host accounts, and `ADMIN` for admin accounts.

### Events

Events are the main purpose of the site. Each course will be it's own event. A host should be able to create their own event as well as modify it's description. Users should be able to search events by their title and eventually also by the name of the event hosts. Events will each have their own page with a checkout button. Events should auto-create Zoom calls for the specified time. Users who join the event and successfully check out should automatically receive invite links for the Zoom call. Event price modification cannot be done if the event already has listeners (or eventually implement partial refund upon event price reduction). Event deletion can only be done by admins, and should automatically send out refunds and e-mail notifications to the users who have signed up for the event. A notification should also be sent out to users upon event date modification, so users who won't be available at the new date are able to cancel their event.

Event information is saved to the `Event` table in the database. This includes the following information: 

* `eventID` : The unique identifier for each event.
* `title` : The title of the event for searching purposes.
* `createdAt` : The date the event was created.
* `eventTime` : The date and time that the event will take place in.
* `description` : The description of the event.
* `price` : The price of entering the event.
* `speakers` : A list of the people speaking at the event.
* `listeners` : A list of the people listening at the event.

# Technologies

### Next.js routing and rendering
Next.js is optimized React framework. It allows for extremely fast loading times, and it's server-side rendering capability makes for an extremely smooth user experience. The Next.js routing is also very useful, allowing us to easily implement UI elements like navigation bars into multiple pages, implement an API, or just help with the organization of pages.

### Typescript
Typescript adds type safety to JavaScript, allowing us to catch errors early during development, speeding up the process as a whole.

### Styling with Tailwind CSS
Tailwind CSS allows us to modify the style of a div within the div itself. Tailwind CSS was chosen because of its simplicity and speed, eliminating the need to go into a `.css` file for every modification.

### PostgreSQL
PostgreSQL was chosen for the database because it's very efficient. It also has very fast parallel write capabilities, which will speed things up by a lot if we ever have a lot of users.

### Prisma ORM
Prisma ORM is the ORM of choice. It heavily simplifies database querifying, allowing us to skip SQL almost entirely.

### Vercel deployment and hosting
Vercel is the chosen platform for the website hosting. It's very easy to work with and is designed to work flawlessly with Next.js and Prisma ORM. Hosting and updating the website with Vercel is very easy, as it will auto-update every time a commit is pushed to the GitHub main branch of the project. Pricing is very competitive if we ever scale and need more storage or computing power.

### NextAuth
NextAuth is a free open source authentification tool. It allows for a lot of flexibility, allowing users to create accounts with any OAuth authentification service. 

### Stripe
Stripe is what we are using for our payment processor. It is easy to integrate, has very little fees, and has a clean interface on its components.

# Pages
Pages should follow [the Canva layout](https://www.canva.com/design/DAGKF-PnoRs/WBsia219EhA2RdZVPgQ26w/edit) as much as possible.

* Landing page
* Events page
* Individual event page
* Event creation page
* Checkout page
* Contact us page
* Special events page (will be created on a per-event basis)

Other pages to potentially implement in the future:

* Dashboard page for users to find their upcoming events
* Host account pages to see their upcoming hosted events and see their description
* File hosting page for resources such as cheat sheets
* Tutorial pages on how to do certain tasks on the website
* Analytics page
* And many more!

# Website

The temporary link for the website for testing purposes is: https://gen-zineers.vercel.app/

# TODO

Todo list to get the website running as soon as possible. More will be added as we go.

- [x] create repo
- [x] create readme
- [x] speed up build process
- [x] create home page
- [x] set up database
- [x] create events page
- [x] display data on events page
- [x] create contact us page
- [x] set up adding and removing data into database
- [ ] implement event searching on home and event pages
- [x] set up authentification and lock event management behind authentification
- [x] add event-specific page routing
- [x] set up payments
- [ ] auto generate zoom links for the events upon payment
- [ ] archive events that are completed
- [ ] set up error handling
- [x] make the website mobile friendly
- [ ] add accessibility features
