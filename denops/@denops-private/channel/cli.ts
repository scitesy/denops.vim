import { copy } from "./deps.ts";

const listener = Deno.listen({
  hostname: "127.0.0.1",
  port: 0, // Automatically select free port
});

// Use 'warn' to output data in stderr
console.warn(JSON.stringify(listener.addr));

for await (const conn of listener) {
  // Allow only single client
  await Promise.all([
    copy(conn, Deno.stdout).finally(() => conn.close()),
    copy(Deno.stdin, conn),
  ]);
}
