export type StoryBlokStory = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  published_at: string | null;
  full_slug: string;
  content: {
    [key: string]: any;
  };
}