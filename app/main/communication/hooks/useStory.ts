import { useState } from 'react';

export default function useStory() {
  const [tags, setTags] = useState<string[]>([]);
}
