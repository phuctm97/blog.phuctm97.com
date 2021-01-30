module.exports = {
  async redirects() {
    return [
      {
        source: "/zsh-antigen-oh-my-zsh-a-beautiful-powerful-robust-shell",
        destination: "https://phuctm97.com/blog/zsh-antigen-ohmyzsh",
        permanent: true,
      },
      {
        source: "/use-go-channels-as-promises-and-async-await",
        destination: "https://phuctm97.com/blog/go-channel-as-async-await",
        permanent: true,
      },
      {
        source: "/sync-vs-async-vs-concurrent-vs-parallel",
        destination: "https://phuctm97.com/blog/sync-async-concurrent-parallel",
        permanent: true,
      },
      {
        source:
          "/2-min-codecamp-binary-search-tree-and-real-world-applications",
        destination: "https://phuctm97.com/blog/binary-tree-seach-apps",
        permanent: true,
      },
      {
        source: "/reverse-engineer-a-no-code-website-builder",
        destination: "https://phuctm97.com/blog/reverse-engineer-carrd",
        permanent: true,
      },
      {
        source: "/amazon-dynamodb-all-you-need-to-know-about-this-aws-service",
        destination: "https://phuctm97.com/blog/dynamodb-all-to-know",
        permanent: true,
      },
      {
        source: "/",
        destination: "https://phuctm97.com",
        permanent: false,
      },
    ];
  },
};
