export class Quote {
    showAuthor: boolean;
    id: number | undefined;
      constructor(
        public name: string, 
        public author: string, 
        public person: string, 
        public quoteDate: Date, 
        public upvote: number = 0, 
        public downvote: number = 0, 
        public isFavorite: boolean
        )
      {     
           this.showAuthor=false;
      }
  
  }
  