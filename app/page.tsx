import Login from "@/app/login/page";
import ToggleTheme from "@/app/components/toggle-theme/ToggleTheme";

export default function Home() {
  return (
    <main className="bg-land dark:bg-dark-land bg-cover flex min-h-screen flex-col text-slate-800 px-3">
      <Login/>
      <ToggleTheme/>
    </main>
  );
}
