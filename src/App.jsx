// App.jsx
import { AppWindowIcon, CodeIcon, CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import * as React from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href} className="text-sm font-semibold no-underline hover:underline">
          <div className="text-sm font-semibold">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-indigo-600">Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-indigo-100 to-indigo-200 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-bold text-indigo-700">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-teal-600">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs" className="text-violet-600 font-semibold no-underline hover:underline">Docs</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-rose-600">List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="hover:text-rose-600 no-underline">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">
                      Browse all components in the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="hover:text-rose-600 no-underline">
                    <div className="font-medium">Documentation</div>
                    <div className="text-muted-foreground">
                      Learn how to use the library.
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="hover:text-rose-600 no-underline">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      Read our latest blog posts.
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-orange-600">Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="no-underline hover:underline">Components</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="no-underline hover:underline">Documentation</a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="no-underline hover:underline">Blocks</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="text-emerald-600">With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 hover:text-emerald-600 no-underline">
                    <CircleHelpIcon /> Backlog
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 hover:text-emerald-600 no-underline">
                    <CircleIcon /> To Do
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a href="#" className="flex-row items-center gap-2 hover:text-emerald-600 no-underline">
                    <CircleCheckIcon /> Done
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 via-purple-50 to-indigo-100 flex flex-col items-center">
      <header className="w-full py-6 px-4 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-wide uppercase drop-shadow mb-2">SHADCN COMPONENT LIBRARY</h1>
        <div className="rounded-2xl bg-white/60 shadow-lg px-2 py-1 w-full max-w-2xl flex justify-center">
          <NavigationMenuDemo />
        </div>
      </header>

      <main className="flex-1 w-full flex justify-center items-start mt-6 px-4">
        
        <div className="w-1/5 min-w-[150px] max-w-[220px] flex flex-col items-start gap-4 border-r border-purple-200 pr-4">
          <h2 className="text-lg font-bold text-purple-700 mb-6">Buttons</h2>
          <Button variant="default" className="w-full bg-indigo-500 hover:bg-indigo-700 text-white transition">Default</Button>
          <Button variant="destructive" className="w-full bg-red-500 hover:bg-red-700 text-white transition">Destructive</Button>
          <Button variant="outline" className="w-full border-indigo-500 text-indigo-700 hover:bg-indigo-50 transition">Outline</Button>
          <Button variant="secondary" className="w-full bg-pink-500 hover:bg-pink-700 text-white transition">Secondary</Button>
          <Button variant="ghost" className="w-full text-gray-800 hover:bg-gray-200 transition">Ghost</Button>
        </div>

       
        <div className="flex flex-col items-center justify-center w-3/5 min-w-[280px] max-w-[600px] px-4">
          <Card className="w-full max-w-md bg-gradient-to-br from-indigo-50 to-white shadow-xl border-2 border-indigo-100">
            <CardHeader>
              <CardTitle className="text-xl text-violet-800">Login to your account</CardTitle>
              <CardDescription className="text-gray-500">
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link" className="text-indigo-700">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-indigo-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="bg-indigo-50 border border-indigo-200"
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password" className="text-indigo-700">Password</Label>
                      <a href="#" className="ml-auto inline-block text-sm text-indigo-600 underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required className="bg-indigo-50 border border-indigo-200" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white transition">
                Login
              </Button>
              <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50 transition">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
          {/* Input Group Below Card */}
          <div className="flex flex-col gap-2 w-full max-w-md mt-8 bg-pink-50 p-4 rounded-xl shadow border-l-4 border-pink-300">
            <Label htmlFor="subscribe-email" className="text-pink-700">Subscribe to our newsletter</Label>
            <div className="flex items-center gap-2">
              <Input id="subscribe-email" type="email" placeholder="Email" className="bg-white border-pink-300" />
              <Button type="submit" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar with Tabs */}
        <div className="w-1/5 min-w-[180px] max-w-[300px] flex flex-col items-start gap-4 border-l border-pink-200 pl-4">
          <h2 className="text-lg font-bold text-pink-700 mb-4">Profile Tabs</h2>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="bg-pink-100">
              <TabsTrigger value="account" className="text-pink-700">Account</TabsTrigger>
              <TabsTrigger value="password" className="text-rose-700">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card className="bg-pink-50 border-l-4 border-pink-300 w-full">
                <CardHeader>
                  <CardTitle className="text-pink-700">Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when you're done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-name" className="text-pink-700">Name</Label>
                    <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-username" className="text-pink-700">Username</Label>
                    <Input id="tabs-demo-username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full">Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card className="bg-rose-50 border-l-4 border-rose-300 w-full">
                <CardHeader>
                  <CardTitle className="text-rose-700">Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-current" className="text-rose-700">Current password</Label>
                    <Input id="tabs-demo-current" type="password" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-demo-new" className="text-rose-700">New password</Label>
                    <Input id="tabs-demo-new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white w-full">Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default App
