import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [isloading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const items = response.items;
      const newProjects = items.map((item) => {
        const { title, url, image } = item.fields;
        const imageUrl = image.fields.file.url;
        return { title, url, imageUrl };
      });

      setProjects(newProjects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isloading, projects };
};

export default useFetchProjects;
