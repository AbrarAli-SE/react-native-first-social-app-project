import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
        username: v.string(),
        fullname: v.string(),
        Image: v.string(),
        bio: v.optional(v.string()),
        email: v.string(),
        clerkId: v.string(),
    },

    handler: async (ctx, args) => {
        const existingUser = await ctx.db.query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .first();

        if (existingUser) return

        await ctx.db.insert("users",
            {
                username: args.username,
                fullname: args.fullname,
                email: args.email,
                bio: args.bio,
                Image: args.Image,
                followers: 0,
                following: 0,
                posts: 0,
                clerkId: args.clerkId,

            })

    }
});
