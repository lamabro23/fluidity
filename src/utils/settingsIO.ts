type SettingsDesign = {
  name: string;
  image: string;
  colors: {
    "--bg-color": string;
    "--default-color": string;
    "--accent-color": string;
    "--accent-color2": string;
  };
};

type SettingsLinkGroup = {
  title: string;
  links: {
    label: string;
    value: string;
  }[];
};

type SettingsSearchSettings = {
  engine: string;
  fastForward: Record<string, string>;
};

export interface SettingsData {
  design: SettingsDesign;
  linkGroups: SettingsLinkGroup[];
  searchSettings: SettingsSearchSettings;
  themes: SettingsDesign[];
}

const validateSettingsData = (data: unknown): data is SettingsData => {
  return (
    data !== null &&
    typeof data === "object" &&
    "design" in data &&
    "linkGroups" in data &&
    "searchSettings" in data &&
    "themes" in data
  );
};

const saveSettingsToLocalStorage = (data: SettingsData) => {
  localStorage.setItem("design", JSON.stringify(data.design));
  localStorage.setItem("link-groups", JSON.stringify(data.linkGroups));
  localStorage.setItem("search-settings", JSON.stringify(data.searchSettings));
  localStorage.setItem("themes", JSON.stringify(data.themes));
};

export const importSettings = (
  onSuccess?: () => void,
  // eslint-disable-next-line no-unused-vars
  onError?: (msg: string) => void,
) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";

  input.onchange = async (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      onError?.("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string);

        if (validateSettingsData(jsonData)) {
          saveSettingsToLocalStorage(jsonData);
          onSuccess?.();
        } else {
          onError?.(
            "Invalid file structure. Please upload a valid settings file.",
          );
        }
      } catch {
        onError?.("Failed to parse the file. Please upload a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  input.click();
};

export const exportSettings = () => {
  const design = JSON.parse(localStorage.getItem("design") || "null");
  const linkGroups = JSON.parse(localStorage.getItem("link-groups") || "null");
  const searchSettings = JSON.parse(
    localStorage.getItem("search-settings") || "null",
  );
  const themes = JSON.parse(localStorage.getItem("themes") || "null");

  const data: SettingsData = { design, linkGroups, searchSettings, themes };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "settings.json";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
