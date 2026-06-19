import { auth } from "@/auth";

export async function getCurrentUser() {

  const session = await auth();

  return session?.user ?? null;
}

export async function requireUser() {

  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Authentication required");
  }

  return user;
}

export async function requireAdmin() {

  const user = await requireUser();

  if ((user as any).role !== "ADMIN") {
    throw new Error("Admin access required");
  }

  return user;
}
            return null;
          }

          const valid =
            await bcrypt.compare(
              credentials.password as string,
              user.passwordHash
            );

          if (!valid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name:
              user.firstName +
              " " +
              user.lastName
          };
        }
      })
    ]



    
  });
