{
  description = "linux-rust-101: Rust で書く Linux カーネル教材サイト";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
      git-hooks,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        checks = {
          pre-commit-check = git-hooks.lib.${system}.run {
            src = ./.;
            hooks = {
              biome = {
                enable = true;
                settings = {
                  write = true;
                  configPath = ".";
                };
              };
              markdownlint = {
                enable = true;
                settings.globs = "src/content/docs/**/*.{md,mdx}";
              };
              nixfmt-rfc-style.enable = true;
            };
          };
        };

        devShells.default = pkgs.mkShell {
          inherit (self.checks.${system}.pre-commit-check) shellHook;

          buildInputs = [
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.biome
            pkgs.markdownlint-cli2
            pkgs.nixfmt-rfc-style
          ]
          ++ self.checks.${system}.pre-commit-check.enabledPackages;
        };
      }
    );
}
