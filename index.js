// Simulated user service with common issues

export async function getUserById(id) {
  if (!id) {
    return null;
  }

  // ❌ No input validation (type / range)
  const user = await fetchUserFromDb(id);

  // ❌ Possible null access
  return {
    id: user.id,
    name: user.name.toUpperCase(),
    email: user.email,
  };
}

async function fetchUserFromDb(id) {
  // ❌ Fake async call with no error handling
  return {
    id,
    name: "john doe",
    email: "john@example.com",
  };
} 
