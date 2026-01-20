declare global {
  interface Window {
    getScreenDetails: () => void;
  }
}

const id = <T extends HTMLElement>(id: string) => document.getElementById(id)!! as T;

function onPermissionChanged({ state }: { state: string }) {
  id("permission-state").innerText = state;
  id<HTMLButtonElement>("permission-prompt").disabled = state !== "prompt";
}

document.addEventListener("DOMContentLoaded", () => {
  id("permission-prompt").addEventListener("click", () =>
    window.getScreenDetails(),
  );

  navigator.permissions.query({ name: "window-management" as any}).then((status) => {
    id("loading").classList.add("hidden");
    onPermissionChanged(status);
    status.onchange = () => onPermissionChanged(status);
  });

  id("close-window-button").addEventListener("click", () => window.close());
});
