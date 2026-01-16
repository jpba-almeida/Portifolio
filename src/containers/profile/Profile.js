import React, {useState, useEffect, lazy, Suspense} from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProfile] = useState(null);

  useEffect(() => {
    // Tenta carregar o profile.json do GitHub
    const getProfileData = async () => {
      try {
        const result = await fetch("/profile.json");
        if (result.ok) {
          const response = await result.json();
          // salva user do GitHub, se existir
          setProfile(response.data?.user || null);
        } else {
          setProfile(null);
        }
      } catch (error) {
        console.error(
          `${error} (GitHub profile section could not be displayed. Contact section will be shown)`
        );
        setProfile(null);
      }
    };

    getProfileData();
  }, []);

  // Se prof existe, renderiza GitHubCard; se não, renderiza Contact
  if (prof) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  }

  return <Contact />;
}
