import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../components/MainBarcomponents";
import { Mainlogo } from "../../components/logo";
import { BACKEND_URL } from "../../config";

type SharedContent = {
  title: string;
  link: string;
  type: "twitter" | "youtube";
};

export const SharedBrainPage = () => {
  const { shareId } = useParams();
  const [content, setContent] = useState<SharedContent[]>([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSharedContent() {
      if (!shareId) {
        setError("Invalid share link");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`);
        setContent(response.data.content || []);
        setUsername(response.data.username || "Shared Brain");
      } catch {
        setError("Unable to load shared content");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSharedContent();
  }, [shareId]);

  if (isLoading) {
    return <div className="min-h-screen bg-primary2 flex items-center justify-center text-xl font-medium">Loading shared brain...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-primary2 flex items-center justify-center text-xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-primary2 p-6">
      <div className="mb-8">
        <Mainlogo size="lg" />
      </div>
      <h1 className="text-3xl font-bold mb-1">{username}'s Shared Brain</h1>
      <p className="text-sidebartextcolor mb-8">Public content shared through the brain share link.</p>

      <div className="flex gap-4 flex-wrap">
        {content.map(({ title, type, link }) => (
          <MainContainer key={`${title}-${link}`} size="md" title={title} type={type} date={new Date()} link={link} />
        ))}
      </div>
    </div>
  );
};
