if [ "$(git rev-list --count HEAD)" -ne 1 ] && git diff HEAD^ HEAD --quiet -- ':!./cms'; then
  echo "Only CMS changed. Skipping build."
  exit 0
else
  exit 1
fi
