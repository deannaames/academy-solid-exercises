// =============================================================
// Exercise 1 – Single Responsibility Principle (SRP)
//
// YOUR TASK:
//   Refactor it so each class has only ONE reason to change.
//   Wire them together so the output at the bottom still works.
//
// Run:  npm run exercise-1
// =============================================================

class BlogPost {

  constructor(public title: string, public content: string, public author: string) {
  }
}
  class BlogPostRepository {

    saveToDatabase(post: BlogPost) {
    console.log(`Saving "${post.title}" to the database...`);
    }
  }
  // Formatting
  class BlogPostRender {
  renderAsHtml(post: BlogPost): string {
    return `<h1>${post.title}</h1><p>By ${post.author}</p><p>${post.content}</p>`;
  }
}

  // Notification
  class BlogPostNotifier {
  notifySubscribers(post: BlogPost) {
    console.log(`Sending email notification for new post: "${post.title}"`);
  }
  }

const post = new BlogPost("SOLID Rocks", "Here is why...", "Alice");

const repository = new BlogPostRepository();
const renderer = new BlogPostRender();
const notifier = new BlogPostNotifier();

repository.saveToDatabase(post);
console.log(renderer.renderAsHtml(post));
notifier.notifySubscribers(post);
