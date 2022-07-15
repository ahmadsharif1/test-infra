export const NUM_MINUTES = 15;
export const REPO: string = "pytorch";
export const DRCI_COMMENT_START = "<!-- drci-comment-start -->\n";
export const OH_URL =
  "https://github.com/pytorch/pytorch/wiki/Dev-Infra-Office-Hours";
export const DOCS_URL = "https://docs-preview.pytorch.org/";
export const PYTHON_DOCS_URL = "/index.html";
export const CPP_DOCS_URL = "/cppdocs/index.html";
export const DRCI_COMMENT_END = "\n<!-- drci-comment-end -->";
export const POSSIBLE_USERS = ["swang392"];
export const HUD_URL = "https://hud.pytorch.org/pr/";

export function formDrciComment(prNum: number): string {
    let body = `## :link: Helpful Links
### :test_tube: See artifacts and rendered test results [here](${HUD_URL}${prNum})
* :page_facing_up: Preview [Python docs built from this PR](${DOCS_URL}${prNum}${PYTHON_DOCS_URL})
* :page_facing_up: Preview [C++ docs built from this PR](${DOCS_URL}${prNum}${CPP_DOCS_URL})
* :question: Need help or want to give feedback on the CI? Visit our [office hours](${OH_URL})
Note: Links to docs will display an error until the docs builds have been completed.`;
    return DRCI_COMMENT_START + body + DRCI_COMMENT_END;
}