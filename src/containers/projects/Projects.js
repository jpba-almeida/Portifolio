import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );

  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const result = await fetch("/profile.json");
        if (!result.ok) throw new Error("Failed to fetch profile.json");

        const response = await result.json();
        setRepo(response.data?.user?.pinnedItems?.edges || []);
      } catch (error) {
        console.error(
          `${error} (Projects section could not be displayed)`
        );
        setRepo([]);
      }
    };

    getRepoData();
  }, []);

  // Se não houver repos, mostra fallback
  if (!repo || repo.length === 0) {
    return null; // ou um componente de fallback
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="projects">
        <h1 className="project-title">Pinned Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(`Github Object for repository number : ${i} is undefined`);
              return null;
            }
            return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
